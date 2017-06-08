/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3721Component } from './comp-3721.component';

describe('Comp3721Component', () => {
  let component: Comp3721Component;
  let fixture: ComponentFixture<Comp3721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});