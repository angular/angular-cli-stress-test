/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service697Service } from './service-697.service';

describe('Service697Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service697Service]
    });
  });

  it('should ...', inject([Service697Service], (service: Service697Service) => {
    expect(service).toBeTruthy();
  }));
});
