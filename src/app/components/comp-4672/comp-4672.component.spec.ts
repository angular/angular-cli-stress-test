/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4672Component } from './comp-4672.component';

describe('Comp4672Component', () => {
  let component: Comp4672Component;
  let fixture: ComponentFixture<Comp4672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
