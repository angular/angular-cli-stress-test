/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp239Component } from './comp-239.component';

describe('Comp239Component', () => {
  let component: Comp239Component;
  let fixture: ComponentFixture<Comp239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
