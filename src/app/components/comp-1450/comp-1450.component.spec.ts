/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1450Component } from './comp-1450.component';

describe('Comp1450Component', () => {
  let component: Comp1450Component;
  let fixture: ComponentFixture<Comp1450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
