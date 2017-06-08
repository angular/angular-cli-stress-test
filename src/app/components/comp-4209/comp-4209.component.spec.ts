/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4209Component } from './comp-4209.component';

describe('Comp4209Component', () => {
  let component: Comp4209Component;
  let fixture: ComponentFixture<Comp4209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
