/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp248Component } from './comp-248.component';

describe('Comp248Component', () => {
  let component: Comp248Component;
  let fixture: ComponentFixture<Comp248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
