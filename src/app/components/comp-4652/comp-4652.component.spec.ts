/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4652Component } from './comp-4652.component';

describe('Comp4652Component', () => {
  let component: Comp4652Component;
  let fixture: ComponentFixture<Comp4652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
