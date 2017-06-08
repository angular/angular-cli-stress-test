/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2829Component } from './comp-2829.component';

describe('Comp2829Component', () => {
  let component: Comp2829Component;
  let fixture: ComponentFixture<Comp2829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
