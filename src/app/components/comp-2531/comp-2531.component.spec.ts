/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2531Component } from './comp-2531.component';

describe('Comp2531Component', () => {
  let component: Comp2531Component;
  let fixture: ComponentFixture<Comp2531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
