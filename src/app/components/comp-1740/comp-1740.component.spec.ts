/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1740Component } from './comp-1740.component';

describe('Comp1740Component', () => {
  let component: Comp1740Component;
  let fixture: ComponentFixture<Comp1740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
