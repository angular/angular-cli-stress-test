/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4472Component } from './comp-4472.component';

describe('Comp4472Component', () => {
  let component: Comp4472Component;
  let fixture: ComponentFixture<Comp4472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
