/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp750Component } from './comp-750.component';

describe('Comp750Component', () => {
  let component: Comp750Component;
  let fixture: ComponentFixture<Comp750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
