/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp92Component } from './comp-92.component';

describe('Comp92Component', () => {
  let component: Comp92Component;
  let fixture: ComponentFixture<Comp92Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp92Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
