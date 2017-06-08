/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp251Component } from './comp-251.component';

describe('Comp251Component', () => {
  let component: Comp251Component;
  let fixture: ComponentFixture<Comp251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
