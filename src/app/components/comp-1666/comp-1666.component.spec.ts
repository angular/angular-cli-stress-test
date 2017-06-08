/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1666Component } from './comp-1666.component';

describe('Comp1666Component', () => {
  let component: Comp1666Component;
  let fixture: ComponentFixture<Comp1666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
