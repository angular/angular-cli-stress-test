/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp362Component } from './comp-362.component';

describe('Comp362Component', () => {
  let component: Comp362Component;
  let fixture: ComponentFixture<Comp362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
