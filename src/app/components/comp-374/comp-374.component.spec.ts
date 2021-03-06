/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp374Component } from './comp-374.component';

describe('Comp374Component', () => {
  let component: Comp374Component;
  let fixture: ComponentFixture<Comp374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
