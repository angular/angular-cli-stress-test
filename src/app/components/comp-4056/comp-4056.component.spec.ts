/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4056Component } from './comp-4056.component';

describe('Comp4056Component', () => {
  let component: Comp4056Component;
  let fixture: ComponentFixture<Comp4056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
