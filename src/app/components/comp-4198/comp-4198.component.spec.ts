/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4198Component } from './comp-4198.component';

describe('Comp4198Component', () => {
  let component: Comp4198Component;
  let fixture: ComponentFixture<Comp4198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
