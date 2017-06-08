/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp878Component } from './comp-878.component';

describe('Comp878Component', () => {
  let component: Comp878Component;
  let fixture: ComponentFixture<Comp878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
