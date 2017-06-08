/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3591Component } from './comp-3591.component';

describe('Comp3591Component', () => {
  let component: Comp3591Component;
  let fixture: ComponentFixture<Comp3591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
