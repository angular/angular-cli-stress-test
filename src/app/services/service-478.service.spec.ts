/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service478Service } from './service-478.service';

describe('Service478Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service478Service]
    });
  });

  it('should ...', inject([Service478Service], (service: Service478Service) => {
    expect(service).toBeTruthy();
  }));
});
