/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4894Component } from './comp-4894.component';

describe('Comp4894Component', () => {
  let component: Comp4894Component;
  let fixture: ComponentFixture<Comp4894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
