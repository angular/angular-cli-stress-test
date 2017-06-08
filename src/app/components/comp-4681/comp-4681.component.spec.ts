/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4681Component } from './comp-4681.component';

describe('Comp4681Component', () => {
  let component: Comp4681Component;
  let fixture: ComponentFixture<Comp4681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
