/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4125Component } from './comp-4125.component';

describe('Comp4125Component', () => {
  let component: Comp4125Component;
  let fixture: ComponentFixture<Comp4125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
