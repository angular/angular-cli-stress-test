/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3442Component } from './comp-3442.component';

describe('Comp3442Component', () => {
  let component: Comp3442Component;
  let fixture: ComponentFixture<Comp3442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
