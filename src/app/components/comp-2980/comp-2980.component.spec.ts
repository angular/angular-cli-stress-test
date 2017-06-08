/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2980Component } from './comp-2980.component';

describe('Comp2980Component', () => {
  let component: Comp2980Component;
  let fixture: ComponentFixture<Comp2980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
