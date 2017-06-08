/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4159Component } from './comp-4159.component';

describe('Comp4159Component', () => {
  let component: Comp4159Component;
  let fixture: ComponentFixture<Comp4159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
