/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1985Component } from './comp-1985.component';

describe('Comp1985Component', () => {
  let component: Comp1985Component;
  let fixture: ComponentFixture<Comp1985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
