/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4664Component } from './comp-4664.component';

describe('Comp4664Component', () => {
  let component: Comp4664Component;
  let fixture: ComponentFixture<Comp4664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
