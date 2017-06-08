/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4543Component } from './comp-4543.component';

describe('Comp4543Component', () => {
  let component: Comp4543Component;
  let fixture: ComponentFixture<Comp4543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
