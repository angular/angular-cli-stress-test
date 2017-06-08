/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4865Component } from './comp-4865.component';

describe('Comp4865Component', () => {
  let component: Comp4865Component;
  let fixture: ComponentFixture<Comp4865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
