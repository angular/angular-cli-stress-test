/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp223Component } from './comp-223.component';

describe('Comp223Component', () => {
  let component: Comp223Component;
  let fixture: ComponentFixture<Comp223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
