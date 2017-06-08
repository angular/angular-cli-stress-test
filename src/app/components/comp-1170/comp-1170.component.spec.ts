/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1170Component } from './comp-1170.component';

describe('Comp1170Component', () => {
  let component: Comp1170Component;
  let fixture: ComponentFixture<Comp1170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
