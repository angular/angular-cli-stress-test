/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp395Component } from './comp-395.component';

describe('Comp395Component', () => {
  let component: Comp395Component;
  let fixture: ComponentFixture<Comp395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
