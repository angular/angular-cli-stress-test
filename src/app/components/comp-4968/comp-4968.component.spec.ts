/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4968Component } from './comp-4968.component';

describe('Comp4968Component', () => {
  let component: Comp4968Component;
  let fixture: ComponentFixture<Comp4968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
