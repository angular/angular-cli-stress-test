/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4527Component } from './comp-4527.component';

describe('Comp4527Component', () => {
  let component: Comp4527Component;
  let fixture: ComponentFixture<Comp4527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
