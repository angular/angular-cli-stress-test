/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4133Component } from './comp-4133.component';

describe('Comp4133Component', () => {
  let component: Comp4133Component;
  let fixture: ComponentFixture<Comp4133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
