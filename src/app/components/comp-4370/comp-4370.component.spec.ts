/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4370Component } from './comp-4370.component';

describe('Comp4370Component', () => {
  let component: Comp4370Component;
  let fixture: ComponentFixture<Comp4370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
