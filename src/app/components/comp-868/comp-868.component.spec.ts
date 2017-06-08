/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp868Component } from './comp-868.component';

describe('Comp868Component', () => {
  let component: Comp868Component;
  let fixture: ComponentFixture<Comp868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
