/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1110Component } from './comp-1110.component';

describe('Comp1110Component', () => {
  let component: Comp1110Component;
  let fixture: ComponentFixture<Comp1110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
