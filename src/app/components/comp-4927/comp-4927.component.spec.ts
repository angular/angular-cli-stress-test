/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4927Component } from './comp-4927.component';

describe('Comp4927Component', () => {
  let component: Comp4927Component;
  let fixture: ComponentFixture<Comp4927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
