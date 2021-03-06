/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4975Component } from './comp-4975.component';

describe('Comp4975Component', () => {
  let component: Comp4975Component;
  let fixture: ComponentFixture<Comp4975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
