/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service793Service } from './service-793.service';

describe('Service793Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service793Service]
    });
  });

  it('should ...', inject([Service793Service], (service: Service793Service) => {
    expect(service).toBeTruthy();
  }));
});
