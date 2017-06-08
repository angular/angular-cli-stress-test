/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4947Component } from './comp-4947.component';

describe('Comp4947Component', () => {
  let component: Comp4947Component;
  let fixture: ComponentFixture<Comp4947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
