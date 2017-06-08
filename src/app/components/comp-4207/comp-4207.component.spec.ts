/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4207Component } from './comp-4207.component';

describe('Comp4207Component', () => {
  let component: Comp4207Component;
  let fixture: ComponentFixture<Comp4207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
