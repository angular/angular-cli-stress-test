/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp218Component } from './comp-218.component';

describe('Comp218Component', () => {
  let component: Comp218Component;
  let fixture: ComponentFixture<Comp218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
