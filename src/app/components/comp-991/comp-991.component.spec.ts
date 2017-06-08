/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp991Component } from './comp-991.component';

describe('Comp991Component', () => {
  let component: Comp991Component;
  let fixture: ComponentFixture<Comp991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
