/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service717Service } from './service-717.service';

describe('Service717Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service717Service]
    });
  });

  it('should ...', inject([Service717Service], (service: Service717Service) => {
    expect(service).toBeTruthy();
  }));
});
