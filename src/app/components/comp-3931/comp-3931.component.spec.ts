/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3931Component } from './comp-3931.component';

describe('Comp3931Component', () => {
  let component: Comp3931Component;
  let fixture: ComponentFixture<Comp3931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
