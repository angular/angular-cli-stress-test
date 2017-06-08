/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp915Component } from './comp-915.component';

describe('Comp915Component', () => {
  let component: Comp915Component;
  let fixture: ComponentFixture<Comp915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
