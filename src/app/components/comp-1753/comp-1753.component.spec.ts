/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1753Component } from './comp-1753.component';

describe('Comp1753Component', () => {
  let component: Comp1753Component;
  let fixture: ComponentFixture<Comp1753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
