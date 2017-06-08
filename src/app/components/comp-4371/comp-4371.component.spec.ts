/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4371Component } from './comp-4371.component';

describe('Comp4371Component', () => {
  let component: Comp4371Component;
  let fixture: ComponentFixture<Comp4371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
